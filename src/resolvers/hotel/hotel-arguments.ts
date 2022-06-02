import { Field, InputType } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class BaseHotelInput {
  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  type: string;

  @Field()
  star: string;

  @Field()
  image: string;
}

@InputType()
export class HotelInput extends BaseHotelInput {
  @Field()
  _id: ObjectId;
}