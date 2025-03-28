import { PartialType } from "@nestjs/mapped-types";
import { CreatePersonDto } from "./create-person.dto";

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  readonly name: string;
  readonly surName: string;
  readonly height: number;
  readonly weight: number;
  readonly location: string;
  readonly image: string;
}
