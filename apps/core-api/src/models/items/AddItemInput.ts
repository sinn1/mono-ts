import { Field, InputType } from 'type-graphql';

@InputType()
export default class AddItemInput {
  @Field()
  name: string;
}
