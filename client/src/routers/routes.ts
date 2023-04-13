import Home from "../page/Home";
import Login from "../page/Login";
// import Dashboard from "../admin/DoashBoard";
// import InfoTeacher from "../admin/InfoTeacher";
// import InfoCourses from "../admin/InfoCourses";
// import CoursesManager from "../admin/CoursesManager";
// import TeacherManager from "../admin/TeacherManager";
// import StudentManager from "../admin/StudentManager";


const publicRoute = [
    {
        component: Home,
        path: "/",
        defaultLayout: true,
    },
    {
        component: Login,
        path: "/login",
    },
];


const privateRoute = [
    {
        // component:  Dashboard,
        component:  "ss",
        path: "/admin",
    },
    // {
    //     component: StudentManager,
    //     path: "/admin/student",
    //   },
    //   {
    //     component: TeacherManager,
    //     path: "/admin/teacher",
    //   },
    //   {
    //     component: CoursesManager,
    //     path: "/admin/courses",
    //   },
    //   {
    //     component: InfoCourses,
    //     path: "/admin/courses-info",
    //   },
    //   {
    //     component: InfoTeacher,
    //     path: "/admin/teacher-info/:userId",
    //   },
    // {
    //   component: Profile,
    //   patch: "/profile",
    //   defaultLayout: true,
    //   children: [
    //     {
    //       component: EditProfile,
    //       patch: "edit-profile",
    //     },
    //     {
    //       component: DeleteProfile,
    //       patch: "delete-profile",
    //     },
    //   ],
    // },
    // {
    //   component: CreateCourse,
    //   patch: "/teacher/create-course",
    //   defaultLayout: true,
    // },
    // {
    //   component: StudentManager,
    //   patch: "/admin/student",
    // },
    // {
    //   component: TeacherManager,
    //   patch: "/admin/teacher",
    // },
    // {
    //   component: CoursesManager,
    //   patch: "/admin/courses",
    // },
    // {
    //   component: InfoCourses,
    //   patch: "/admin/courses-info",
    // },
    // {
    //   component: InfoTeacher,
    //   patch: "/admin/teacher-info/:userId",
    // },
    // {
    //   component: Category,
    //   patch: "/admin/category",
    // },
];

export { publicRoute, privateRoute };