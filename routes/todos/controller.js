const todos = require("../../models/todos")

module.exports = {
    getAll: (req, res) => {
        try {
            res.status(200).json({ data: todos, message: "Get All Data Todos" });
        } catch (error) {
            res.json(error);
        }
    },
    addTodo: (req,res) => {
        try {
            const {name} = req.body
            // console.log(body);
            const newTodo = {
                userid,
                id: todos.length + 1,
                name,
            }
            todos.push(newTodo)
            // console.log(newTodo);
            
            
            res.status(200).json({ 
                message: "Create new data is Successfully", 
                data: todos 
            });
        } catch (error) {
            res.json(error);
            // console.log(error);
            
        }
    },
    editTodo: (req,res) => {
        try {
            const id= req.params.id
            const {name} =req.body

            const editTodo = {
                id: Number(id),
                name,
            }

            todos.splice(id-1,1,editTodo)

            res.status(200).json({
                message: "Todo is Successfully Changes",
                data: todos
            })
        } catch (error) {
            res.json(error)
        }
    },
    findByID: (req,res) => {
        // console.log(req.params);
        const {userid} = req.params
        
        const filteredID = todos.filter((element) => {
            // console.log(element);
            
            return element.userid == userid
        })

        res.status(200).json({
            message: "Get Data Filter By ID",
            data: filteredID
        })
    },

    deleteAll: (req,res) => {
        res.status(200).json({
            message: "All data has been successfully deleted",
            data: []
        })

    },
    deleteByID: (req,res) => {
        // const index = req.params.id
        const {id} = req.params
        todos.splice(id-1,1)

        res.status(200).json({
            message: `data with id ${id} has been successfully deleted`,
            data: todos
        })

    }

}

