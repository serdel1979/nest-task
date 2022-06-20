import { Controller, Delete, Get, Param, Patch, Post, Put, Req, Query, Body, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { query, Request } from 'express';
import { resolve } from 'path';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() taskDTO: TaskDTO) {

       return new Promise((resolve,reject)=>{
        setTimeout(()=>reject('3 segundos '),3000)
       })

        //throw new BadRequestException('Error en la petición')

        //throw new HttpException('Error en peticion',HttpStatus.BAD_REQUEST);

       /*
        return new Promise((resolve,reject)=>{
            setTimeout(()=>reject('Error en peticion'),5000)
        })*/

       // return this.taskService.create(taskDTO);
    }


    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param() id: string) {
        let ret = this.taskService.findOne(id);
        console.log(ret);
        return ret;
    }


    @Get('done')
    methodGet(@Req() req: Request) {
        return `method ${req.method}`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
        return this.taskService.update(id, taskDTO);
    }



    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskService.delete(id);
    }

}


