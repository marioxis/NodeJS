//criação de variaveis e pacotes
const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const task = require('./models/task')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage:'./task-list.db'})
const tasks = task(sequelize, DataTypes)

//JSON requests
app.use(express.json())
app.set('view engine', 'ejs')

//Lista de tareas para receita
app.get('/task', async (req, res) => {
    const allTask = await tasks.findAll()
    res.json({ action: allTask })
})

//Tarefas por id
app.get('/task/:id', async (req, res) => {
    const taskId = req.params.id
    const task = await tasks.findByPk(taskId)
    res.json({id: task.id, description: task.description  }) 
})

//Criação de uma tarefa
//description: "Comer ricota"
app.post('/task', async (req, res) => {
    const body = req.body
    const task = await tasks.create({ description: body.description, done: body.done})
    res.json(task)
})

//Atualização da tarefa
//description: "Comer deliciosa ricota"
app.put('/task/:id', async (req,res) => {
    const body = req.body
    const taskId = req.params.id 
    const task = await tasks.findByPk(taskId)
    const result = await task.update({ description:body.description, done: body.done})
    res.send({ action: result })
})

//Eliminar tarefa
//description: "Comer deliciosa ricota"
app.delete('/task/:id', async (req, res) => {
    const body = req.body
    const taskId = req.params.id
    const task = await tasks.findByPk(taskId)
    const result = await task.destroy({ where: { description:body.description, done: body.done}})
    res.send({ action: result })
})

app.listen(3000, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
})