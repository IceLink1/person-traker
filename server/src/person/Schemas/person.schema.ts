import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class Person extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  surName: string;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  location: string;

  @Prop({
    default:
      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
  })
  image: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
