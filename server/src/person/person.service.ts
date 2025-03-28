import { Get, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Person } from "./Schemas/person.schema";
import { UpdatePersonDto } from "./dto/update-person.dto";

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name)
    private personModel: mongoose.Model<Person>
  ) {}

  async findAll(page: number = 1, limit: number = 10): Promise<{ data: Person[], totalPages: number, totalCount: number }> {
    const totalCount = await this.personModel.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);
    const skip = (page - 1) * limit;

    const persons = await this.personModel.find().skip(skip).limit(limit);
    
    return {
      data: persons,
      totalPages,
      totalCount,
    };
  }

  async create(person: Person): Promise<Person> {
    const res = await this.personModel.create(person);
    return res;
  }

  async findById(id): Promise<Person> {
    const person = await this.personModel.findById({ _id: id });
    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const res = await this.personModel.findByIdAndUpdate(id, updatePersonDto);
    return res;
  }

  async delete(id): Promise<Person> {
    const res = await this.personModel.findByIdAndDelete({ _id: id });
    return res;
  }
}
