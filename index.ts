#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 3000)
  })
}
async function welcome() {
  let rainbow = chalkAnimation.rainbow('LETS MAKE A TODO LIST');
  await sleep();
  rainbow.stop();
}
await welcome()
let todo :string[]=[]
let loop =true;
while(loop){
    const news = await inquirer.prompt([{
        name:"input",
        type:"num1",
        message:"Enter your new item"
    },
{    type:"confirm",
    name:"addmore",
    message:"Do you want to addmore todo?"
}])
const{input,addmore}=news
loop=addmore
if(input){
    todo.push(input)
}else{
    console.log("kindly add todo")
}
}
if(todo.length>0){
    console.log(chalk.blue("YOUR TODO LIST"))
    todo.forEach(todos=>{
        console.log(chalk.yellowBright(todos))
    })}else{
        console.log("No todos found")
    }

