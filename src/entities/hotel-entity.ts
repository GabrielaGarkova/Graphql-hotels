import { ObjectType, InputType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectId } from "mongodb"

@ObjectType()
export class Hotel {

  @Field()
  readonly _id: ObjectId;

  @Prop({required: true})
  @Field()
  name: string;

  @Prop({required: true})
  @Field()
  city: string;

  @Prop({required: true})
  @Field()
  type: string;

  @Prop({required: true})
  @Field()
  star: string;

  @Prop({required: true})
  @Field()
  image: string;
}

export const HotelModel = getModelForClass(Hotel, { schemaOptions: { timestamps: true }})