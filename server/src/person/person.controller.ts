import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { Person } from "./Schemas/person.schema";
import { PersonService } from "./person.service";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto"

@Controller("person")
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() createPersonDto: Person) {
    return await this.personService.create(createPersonDto);
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return await this.personService.findAll(page, limit);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.personService.findById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return await this.personService.update(id, updatePersonDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.personService.delete(id);
  }
}
