const express = require('express');
const StudentRouter = express.Router();
const {getStudent, postStudent, updateStudent, deleteStudent} = require('../../CONTROLLER/StudentController/StudentController')
const {validateSchema} = require('../../CONTROLLER/StudentController/StudentControllerValidation')






/**
 * @swagger
 * components:
 *      schemas:
 *          student:
 *              type: object
 *              properties:
 *                  student_id:
 *                      type: integer
 *                      description: The unique identifier for a student
 *                  student_name:
 *                      type: string
 *                      description: The name of the student
 */

/**
 * @swagger
 * /viewstudent:
 *          get:
 *              summary: Retrieve all student records
 *              description: Retrieve a list of all student records from the database.
 *              tags: ["student"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of student records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/student'
 */

/**
 * @swagger
 * /addstudent:
 *          post:
 *              summary: Add a new student record
 *              description: Add a new student record to the database. The student ID is auto-incremented.
 *              tags: ["student"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/student'
 *              responses:
 *                  200:
 *                      description: Successfully added the new student record.
 */

/**
 * @swagger
 * /deletestudent/{student_id}:
 *          delete:
 *              summary: Delete a student record
 *              description: Delete a student record from the database using the student ID.
 *              tags: ["student"]
 *              parameters:
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be deleted
 *                    schema:
 *                        type: integer
 *              responses:
 *                  200:
 *                      description: Successfully deleted the student record.
 */

/**
 * @swagger
 * /updatestudent/{student_id}:
 *          patch:
 *              summary: Update a student record
 *              description: Update a student record in the database using the student ID.
 *              tags: ["student"]
 *              parameters:
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be updated
 *                    schema:
 *                        type: integer
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/student'
 *              responses:
 *                  200:
 *                      description: Successfully updated the student record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/student'
 */









StudentRouter.get('/viewstudent', getStudent);
StudentRouter.post('/addstudent',validateSchema, postStudent);
StudentRouter.patch('/updatestudent/:student_id', updateStudent);
StudentRouter.delete('/deletestudent/:student_id', deleteStudent);

module.exports = StudentRouter;