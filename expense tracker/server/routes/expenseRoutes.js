import express from 'express';
import db from '../database/connection.js';


const router = express.Router();

router.get("/expenses", (req, res) => {
    db.query("SELECT * FROM expenses ORDER BY created_at DESC", (error, results) => {
        if(error) throw error

        res.send(results);
    });
});

router.post("/expenses", (req, res) => {
    const {title, amount, category} = req.body;
    const sql = "INSERT INTO expenses(title, amount, category) VALUES(?, ?, ?)";

    db.query(sql, [title, amount, category], (error, result) => {
        if(error) throw error

        res.send({id: result.insertId, title, amount, category});
    })
});

router.delete("/expenses/:id", (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM expenses WHERE id = ?";

    db.query(sql, [id], (error, results) => {
        if(error) throw error

        res.send("expenses deleted successfully!");
    });
});

router.put("/expenses/:id", (req, res) => {
    const {id} = req.params;
    const {title, amount, category} = req.body; 
    const sql = "UPDATE expenses SET title = ? , amount = ?, category = ? WHERE id = ?"
    db.query(sql, [title, amount, category, id], (error, results) => {
        if(error ) throw error;

        res.send("expenses updated successfully!");
    })
})


// router.get('/expenses', (req,res) => {
//     db.query("SELECT * FROM expenses WHERE user_id = ? " , [req.user.userId], (error, results) => {
//         if(error) return error;

//         res.send(results);
//     });
// });



export default router;