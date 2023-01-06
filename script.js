let container3 = document.getElementById("container3")
let no_of_courses = document.getElementById("courses")
let container4 = document.getElementById("container4")
let container5 = document.getElementById("container5")
let container6 = document.getElementById("container6")
let container7 = document.getElementById("container7")
let semester1 = document.getElementById("semester1")
let semester2 = document.getElementById("semester2")
let form = document.getElementById("myForm")
let submitBtn = document.getElementById("submit")
let formDiv = document.getElementById("formdiv")
let formDiv1 = document.getElementById("formdiv1")
let formDiv2 = document.getElementById("formdiv2")
let courses = 0

let addmore = 0
function createInput() {
    
    var input = document.createElement("input") 
    input.setAttribute("type", "number")
    input.setAttribute("name", "input-" + addmore)
    // input.setAttribute("value", (addmore))
    input.setAttribute("id", "input-" + addmore)
    input.setAttribute("placeholder", "Course Unit")
    // formDiv.appendChild(input)
    
    var grade = document.createElement("input")
    grade.setAttribute("type", "text")
    grade.setAttribute("name", "grade-" + addmore)
    grade.setAttribute("id", "grade-" + addmore)
    grade.setAttribute("placeholder", "Grade")
    formDiv1.appendChild(input)
    formDiv2.appendChild(grade)
    // document.querySelectorAll(`#grade-${addmore}, #input-${addmore}`)
    // document.getElementById("grade").style.width = "20px"
    addmore++
}

let gradeTotal = []
let inputTotal = []

function getValue() { 
    var inputValue = Number(semester1.value)
    var gradeValue = semester2.value
    switch (gradeValue) {
        case "A":
        case "a":
            gradeValue = 5
            break
        case "B":
        case "b":
            gradeValue = 4
            break
        case "C":
        case "c":
            gradeValue = 3
            break
        case "D":
        case"d":
            gradeValue = 2
            break
        case "E":
        case "e":
            gradeValue = 1
            break
        case "F":
        case "f":
            gradeValue = 0
            break
        default:
            alert("Grade should be A,B,C,D,E or F")
    }

    for (let i = 0; i < addmore; i++) {
        var sum = document.getElementById("input-" + [i]).value
        var sum1 = document.getElementById("grade-" + [i]).value
        switch (sum1) {
            case "A":
            case "a":
                sum1 = 5
                break
            case "B":
            case "b":
                sum1 = 4
                break
            case "C":
            case "c":
                sum1 = 3
                break
            case "D":
            case"d":
                sum1 = 2
                break
            case "E":
            case "e":
                sum1 = 1
                break
            case "F":
            case "f":
                sum1 = 0
                break
            default:
                alert("Grade should be A,B,C,D,E or F")
        }
        gradeValue = gradeValue * Number(semester1.value)
        inputValue += Number(sum) 
        inputTotal.push(inputValue)
        gradeValue += Number(sum1) * Number(sum)
        gradeTotal.push(gradeValue)
        var final = (gradeValue) / inputValue
    }
    container4.innerHTML = inputValue
    container5.innerHTML = gradeValue
    container6.textContent = final
}
container7.innerHTML = gradeTotal

function removeInput() {
  form.reset()
}































// function createInput() {
//     let inputCount = 0
//     for (let i = 0; i < no_of_courses.value; i++) {
//         let input = document.createElement("input")
//         input.setAttribute("type", "text")
//         input.setAttribute("name", "input" + inputCount)
//         // input.setAttribute("value", "Input #" + (inputCount + 1))
//         form.appendChild(input)
//         inputCount++
//         input.addEventListener("input", function(){
            
//         })
//         submitBtn.addEventListener("click", function(){
//             container4.textContent = input.value
//             courses.push(input.value)
//             container5.textContent = courses
//             let sum = +0
//             for (let i = 0; i < courses.length; i++) {
//                 sum += Number(courses[i])
//             }
//             container3.textContent = sum
//         })
//     }
   
    
// }




// container5.textContent = courses


// newButton.addEventListener("click", function() {
    
// })

// let newInput = []
// for (i=0; i<no_of_courses.value; i++) {
//     newInput += `<input type="number" id= "span" class="span" name="courses" placeholder="Course&nbsp;Unit">`
// }
// container3.innerHTML = newInput
// courses = newInput
// let button = document.createElement("button")
// button.id = "new-button"
// button.textContent = "press"
// container4.appendChild(button)
// document.getElementById("new-button").addEventListener("click", function(){
//     container5.textContent = newInput[0].value 
// })




{/* <input type="number" class="span2" placeholder="Grade"></input> */}

// function calcGP() {
//     for (i=0 i<)
// }
// let span = document.createElement("span")
//         span.id = "span-" + i
//         span.innerHTML = `<input type="text" id= "span" class="span[i]" name="courses" placeholder="Course&nbsp;Unit"><br>`
//         container3.appendChild(span)
//         courses.push(span.value)

