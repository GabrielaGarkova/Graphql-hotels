import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Hotel, HotelModel } from "../../entities/hotel-entity";
import { UserRoles } from "../user/user-roles";
import { BaseHotelInput, HotelInput } from "./hotel-arguments";

@Resolver()
export class HotelResolver {

  @Query(returns => [Hotel])
  async hotels():Promise<Hotel[]> {
    return await HotelModel.find({})
  }

  @Query(returns => Hotel)
  async hotel(@Arg("_id") _id: string):Promise<Hotel> {
    return await HotelModel.findById(_id);
  }

  @Mutation(returns => Hotel)
  async createHotel(@Arg("data") data: BaseHotelInput):Promise<Hotel> {
    const newUser = new HotelModel(data);
    await newUser.save();
    return newUser
  }

  // @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
  @Mutation(returns => Hotel)
  async deleteHotel(@Arg("_id") _id: string):Promise<Hotel> {
    return await HotelModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Hotel)
  async editHotel(@Arg("_id") _id: string, @Arg("data") data: HotelInput):Promise<Hotel> {
    return await HotelModel.findByIdAndUpdate(_id, data, {new: true});
  }

}