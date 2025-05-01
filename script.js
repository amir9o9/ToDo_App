const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const btn = document.querySelector("#advice-btn");

btn.addEventListener("click", adviecPicker);
listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , false);

function addTask(){
    if(inputBox.value === ''){
        alert("You must write somthing!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function showTime() {
    let time = document.getElementById("time");
    let minute , hour , day , date;
    let weekDays = ['Sun' , 'Mon' , 'Tus' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];
    setInterval(()=>{ 
        date= new Date();
        minute=date.getMinutes();
        hour=date.getHours();
        day = weekDays[date.getDay()];        
        time.innerHTML= `${day}  ${hour} : ${minute}`
    },1000)
}

function adviecPicker(){
    const advices = [
        'Protect your mindset by avoiding distractions in the morning. "The 5 AM Club"',
        'The way you start your day affects your emotions and focus. "The 5 AM Club"',
        'Using mornings for personal growth leads to excellence. "The 5 AM Club"',
        'Leaders and high achievers wake up early. "The 5 AM Club"',
        'The 5 AM habit increases happiness and inner peace. "The 5 AM Club"',
        'Commit to morning routines for long-term success. "The 5 AM Club"',
        'Mastery requires intentional daily habits. "The 5 AM Club"',
        'Creativity thrives in the quiet of the early morning. "The 5 AM Club"',
        'Morning solitude sharpens thinking and problem-solving. "The 5 AM Club"',
        'Transform your mindset by owning your mornings. "The 5 AM Club"',
        'Great achievements begin with structured mornings. "The 5 AM Club"',
        'Keystone habits influence multiple areas of life. "The Power of Habit"',
        'Small habit changes can lead to significant transformations. "The Power of Habit"',
        'Habits are powerful but can be reshaped. "The Power of Habit"',
        'Belief is essential for lasting habit change. "The Power of Habit"',
        'Willpower is a trainable habit. "The Power of Habit"',
        'Craving drives the habit loop. "The Power of Habit"',
        'Tracking habits increases self-awareness. "The Power of Habit"',
        'The brain stores habits to reduce cognitive effort. "The Power of Habit"',
        'Social influence can reinforce habits. "The Power of Habit"',
        'Organizations function through collective habits. "The Power of Habit"',
        'Changing one small habit can spark broader changes. "The Power of Habit"',
        'Routine repetition strengthens habits. "The Power of Habit"',
        'Habits can override rational decisions. "The Power of Habit"',
        'Understanding habit mechanics allows us to regain control. "The Power of Habit"',
        'Momentum reinforces habits over time. "The Power of Habit"',
        'Stress can trigger automatic habits. "The Power of Habit"',
        'Replacing bad habits with positive alternatives is key. "The Power of Habit"',
        'Making small changes easier increases habit success. "The Power of Habit"',
        'Visualization strengthens habit formation. "The Power of Habit"',
        'Habits create identity shifts. "The Power of Habit"',
        'Community support improves habit retention. "The Power of Habit"',
        'Triggers can be modified to reshape habits. "The Power of Habit"',
        'Even businesses depend on customer habits. "The Power of Habit"',
        'Habit change requires persistence. "The Power of Habit"',
        'New habits require reinforcement to stick. "The Power of Habit"',
        'Recognizing patterns is the first step to change. "The Power of Habit"',
        'Self-discipline grows as positive habits develop. "The Power of Habit"','small daily improvements lead to massive success. "Atomic Habits"',
        'Your habits shape your identity over time. "Atomic Habits"',
        'Make habits obvious, attractive, easy, and satisfying. "Atomic Habits"',
        'The power of tiny gains compounds over time. "Atomic Habits"',
        'The habit loop consists of cue, craving, response, and reward. "Atomic Habits"',
        'To build a habit, start small and stay consistent. "Atomic Habits"',
        'Identity-based habits lead to lasting change. "Atomic Habits"',
        'Stacking new habits onto existing ones increases success. "Atomic Habits"',
        'Environment design makes or breaks your habits. "Atomic Habits"',
        'Focus on systems, not just goals. "Atomic Habits"',
        'Reducing friction helps reinforce good habits. "Atomic Habits"',
        'An immediate reward increases habit adherence. "Atomic Habits"',
        'The two-minute rule simplifies habit formation. "Atomic Habits"',
        'Tracking habits improves consistency. "Atomic Habits"',
        'Social reinforcement strengthens habit commitment. "Atomic Habits"',
        'Changing your surroundings can transform your behaviors. "Atomic Habits"',
        'Every action is a vote for the person you want to become. "Atomic Habits"',
        'Avoid making habits too difficult in the beginning. "Atomic Habits"',
        'Breaking bad habits requires making them unattractive. "Atomic Habits"',
        'Success is built on the foundation of strong habits. "Atomic Habits"',
        'Mastery is a result of small, consistent improvements. "Atomic Habits"',
        'Habits should be designed to fit your lifestyle. "Atomic Habits"',
        'Start with repetition, not perfection. "Atomic Habits"',
        'The best way to stay consistent is to remove obstacles. "Atomic Habits"',
        'Understanding habit cues makes behavior change easier. "Atomic Habits"',
        'Temptation bundling makes difficult habits more appealing. "Atomic Habits"',
        'Accountability partners increase habit success. "Atomic Habits"',
        'Behavior follows identity—become the person who does the habit. "Atomic Habits"',
        'Small choices compound into life-changing results. "Atomic Habits"',
        'Patience is essential for habit mastery. "Atomic Habits"','Eliminate distractions to maximize efficiency. "Eat That Frog"',
        'Planning ahead saves time and energy. "Eat That Frog"',
        'Successful people focus on high-value tasks. "Eat That Frog"',
        'Procrastination prevents success. "Eat That Frog"',
        'Identify your key goals and work toward them daily. "Eat That Frog"',
        'Break large tasks into smaller, manageable steps. "Eat That Frog"',
        'Success depends on self-discipline. "Eat That Frog"',
        'Use the 80/20 rule to focus on important tasks. "Eat That Frog"',
        'Set deadlines to stay accountable. "Eat That Frog"',
        'Take action immediately—don’t wait for perfect conditions. "Eat That Frog"',
        'Motivation grows as you make progress. "Eat That Frog"',
        'Commit to continuous improvement. "Eat That Frog"',
        'Work on one important task at a time. "Eat That Frog"',
        'Confidence grows as productivity increases. "Eat That Frog"',
        'Fear decreases when you take decisive action. "Eat That Frog"',
        'Successful habits lead to a successful life. "Eat That Frog"',
        'Create a routine that supports efficiency. "Eat That Frog"',
        'Time is your most valuable asset—use it wisely. "Eat That Frog"',
        'Visualize success to boost motivation. "Eat That Frog"',
        'Hard tasks become easier through repetition. "Eat That Frog"',
        'Planning each day leads to greater achievements. "Eat That Frog"',
        'Perfectionism causes delays—just start. "Eat That Frog"',
        'Eliminate low-value tasks to free up time. "Eat That Frog"',
        'Self-discipline creates long-term success. "Eat That Frog"',
        'Making quick decisions prevents procrastination. "Eat That Frog"',
        'The way you manage your time determines your future. "Eat That Frog"','Learn to say no to distractions. "Eat That Frog"'
    ]
    
    let random = Math.floor(Math.random()*advices.length) ;
    
    document.querySelector("#tip-text").textContent = advices[random];
    document.querySelector("#tip-text").style.color = "#000";
    console.log(random)
}

showTime();
showTask();