const employees = [
  {
    id: 1,
    email: "shubham.frontendDev@example.com",
    password: "12345",
    name: "Shubham",
    activeCount: 1,
    newCount: 1,
    completedCount: 0,
    failedCount: 0,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Landing Page UI",
        description: "Design and develop the landing page using React and Tailwind CSS.",
        date: "2025-07-06",
        category: "Frontend Development"
      }
    ]
  },
  {
    id: 2,
    email: "divay.backendDev@example.com",
    password: "12345",
    name: "Divay",
    activeCount: 0,
    newCount: 0,
    completedCount: 1,
    failedCount: 0,
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Set up Authentication API",
        description: "Implement login, register, and JWT-based auth system.",
        date: "2025-07-04",
        category: "Backend Development"
      }
    ]
  },
  {
    id: 3,
    email: "tushar.qaEngineer@example.com",
    password: "12345",
    name: "Tushar",
    activeCount: 0,
    newCount: 0,
    completedCount: 0,
    failedCount: 1,
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Automated Test Scripts",
        description: "Write test cases using Cypress for the user dashboard.",
        date: "2025-07-02",
        category: "Quality Assurance"
      }
    ]
  },
  {
    id: 4,
    email: "atul.uiuxDesigner@example.com",
    password: "12345",
    name: "Atul",
    activeCount: 1,
    newCount: 1,
    completedCount: 0,
    failedCount: 0,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Admin Dashboard",
        description: "Create modern UI mockups in Figma for the admin panel.",
        date: "2025-07-06",
        category: "Design"
      }
    ]
  },
  {
    id: 5,
    email: "yogesh.devOpsEngineer@example.com",
    password: "12345",
    name: "Yogesh",
    activeCount: 0,
    newCount: 0,
    completedCount: 1,
    failedCount: 0,
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CI/CD Pipeline Setup",
        description: "Configure GitHub Actions for automatic testing and deployment.",
        date: "2025-07-05",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "atul.admin@techcorp.com",
    password: "admin123",
    name: "Atul",
  }
]


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    // console.log(employees, admin)
    return {employees , admin}
}