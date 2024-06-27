const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json()); 
app.use(cors());


const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
//IMPORTED ROUTERS
const EmployeeRouter = require('./ROUTE/EmployeeRoute/EmployeeRoute');
const RoleRouter = require('./ROUTE/RoleRoute/RoleRoute')
const AssignRouter = require('./ROUTE/AssignRoute/AssignRoute');
const StudentRouter = require('./ROUTE/StudentRoute/StudentRoute');
const StudentProfileRouter  = require("./ROUTE/StudentProfileRoute/StudentProfileRoute");
const TeacherRouter = require("./ROUTE/TeacherRoute/TeacherRoute")
const TeacherProfileRouter = require('./ROUTE/TeacherProfileRoute/TeacherProfileRoute')
const CourseRouter = require('./ROUTE/CourseRoute/CourseRoute')
const EnrollmentRouter = require('./ROUTE/EnrollmentRoute/EnrollmentRoute')
const EmployeeProfileRouter = require('./ROUTE/EmployeeProfileRoute/EmployeeProfileRoute')



//MOUNTED ROUTERS
app.use('/', EmployeeRouter);
app.use('/', RoleRouter);   
app.use('/', AssignRouter);
app.use('/', StudentRouter );
app.use('/', StudentProfileRouter );
app.use('/', TeacherRouter);
app.use('/', TeacherProfileRouter);
app.use('/', CourseRouter);
app.use('/', EnrollmentRouter);
app.use('/', EmployeeProfileRouter);


const option = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Node.js API documentation for ED Tech",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:5050",
        },
      ],
    },
    apis: [
      "./ROUTE/StudentRoute/StudentRoute.js",
    
    ],
  };
  
  app.use("/testing", swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)));
  app.use('/images', express.static("Images"));  
  
 

const port = 5050;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});