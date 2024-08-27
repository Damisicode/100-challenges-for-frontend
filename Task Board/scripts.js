'use strict'


const boards = [
    {
        boardName: "Test Board",
        id: 1,
        stages: [
            {
                stageName: "To do",
                tasks: [
                    {
                        title: "Update Website Homepage",
                        priority: "high",
                        deadline: "2/15/24",
                        imageFile: "taskimage.jpg",
                        description: "Revise the content and layout of the homepage to highlight new features and improve user engagement.",
                        owner: {
                            username: "Mark",
                            profilePic: "Ellipse 3.png"
                        },
                        members: [
                            {
                                username: "Jeff",
                                profilePic: "Ellipse 4.png"
                            }, this.owner
                        ]
                    }
                    
                ]
            },
            {
                stageName: "In progress",
                tasks: [
                    {
                        title: "Bug Fix - User Registration",
                        priority: "low",
                        deadline: "2/13/24",
                        imageFile: "",
                        description: "Investigate and resolve the reported bug in the user registration process where some users are unable to sign up.",
                        owner: {
                            username: "Peter",
                            profilePic: "Ellipse 5.png"
                        },
                        members: [
                            this.owner
                        ]
                    },
                    {
                        title: "Social Media Campaign",
                        priority: "medium",
                        deadline: "2/08/24",
                        imageFile: "taskimage2.jpg",
                        description: "Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates.",
                        owner: {
                            username: "Peter",
                            profilePic: "Ellipse 5.png"
                        },
                        members: [
                            {
                                username: "Jeff",
                                profilePic: "Ellipse 4.png"
                            },
                            this.owner
                        ]
                    }
                ]
            },
            {
                stageName: "Under Review",
                tasks: [
                    {
                        title: "Mobile App Feature - Push Notifications",
                        priority: "high",
                        deadline: "2/11/24",
                        imageFile: "",
                        description: "Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms.",
                        owner: {
                            username: "Peter",
                            profilePic: "Ellipse 5.png"
                        },
                        members: [
                            this.owner
                        ]
                    }
                    
                ]
            },
            {
                stageName: "Done",
                tasks: [
                    {
                        title: "Content Creation - Blog Post",
                        priority: "low",
                        deadline: "2/09/24",
                        imageFile: "",
                        description: "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.",
                        owner: {
                            username: "Peter",
                            profilePic: "Ellipse 5.png"
                        },
                        members: [
                            this.owner
                        ]
                    },
                    {
                        title: "IT Security Audit",
                        priority: "medium",
                        deadline: "2/07/24",
                        imageFile: "taskimage3.jpg",
                        description: "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.",
                        owner: {
                            username: "Peter",
                            profilePic: "Ellipse 5.png"
                        },
                        members: [
                            {
                                username: "Jeff",
                                profilePic: "Ellipse 4.png"
                            },
                            this.owner
                        ]
                    }
                ]
            }
        ]
    },
]

// Handle all board actions including get, update, delete
const boardAction = function (boardID, action, board) {
    boards.forEach((board) => {
        if (board.id === boardID) {
            if (action === 'get') return board;
            else if (action === 'update') {
                // for 
            } else if (action === 'delete') boards.pop(board);
        }
    })
};

// Handle addition of board
const addBoard = function (newBoard) {
    boards.push(newBoard);
}

// Handle display of 

// Handle all Stage actions including get, update, and delete
const stageAction = function (stageID, action, board, updatedStage) {
    board.stages.forEach((stage) => {
        if (stage.id === stageID) {
            if (action === 'get') return stage;
            else if (action === 'update') {
                // for 
            } else if (action === 'delete') boards.pop(stage);
        }
    })
};

// Handle addition of stage
const addStage = function (boardID, newStage) {
    const board = stageAction(boardID, 'get');
    board.push(newStage);
}

// Handle all task action including get, update, and delete
const taskAction = function (taskID, action, stage, updatedTask) {
    stage.tasks.forEach((task) => {
        if (task.id === taskID) {
            if (action === 'get') return task;
            else if (action === 'update') {
                // for 
            } else if (action === 'delete') boards.pop(task);
        }
    })
};

// Handle addition of task
const addTask = function (stageID, newTask) {
    const stage = stageAction(stageID, 'get');
    stage.push(newTask);
}

const elmnt = `
    <div class="stage">
        <div class="heading">
            <h4>${stageName}</h4>
            <img src="plus-large-svgrepo-com.svg" alt="plus icon" class="plus-icon"/>
        </div>
        <div class="board">
            <div class="board-heading">
                <div class="urgency ${urgencyClass}">${urgency}</div>
                <div class="date">${date}</div>
            </div>
            <div class="board-image"><img src="${taskImageUrl}" alt="todo task image" id="task-image"/></div>
            <h3>${taskTitle}</h3>
            <p>${taskDesc}</p>
            <div class="assignees">
                <img src="${" alt="task detail image 1" id="owner"/>
                <img src="Ellipse 4.png" alt="task detail image 2" id="owner"/>
                <div class="add-owner">
                    <img src="plus-large-svgrepo-com.svg" alt="plus icon" id="plus-icon" />
                </div>
            </div>
        </div>
    </div>
`


function addStage()