window.onload = function() 
{

    let lSkillDict = JSON.parse(window.localStorage.getItem("ski"));
    for(let x in lSkillDict)
    {
        for(let e in lSkillDict[x])
        {
            let tbody = document.getElementById("T.body");
            let row = tbody.insertRow(0);
            let cell = row.insertCell(0);
            cell.innerHTML = lSkillDict[x][e]["comments"];
            cell = row.insertCell(0);
            cell.innerHTML = lSkillDict[x][e]["prof"];
            cell = row.insertCell(0);
            cell.innerHTML = lSkillDict[x][e]["ski"];
            cell = row.insertCell(0);
            cell.innerHTML = x;
        }
    }
}
 

let skillDict = JSON.parse(window.localStorage.getItem("ski"));

if(!skillDict)
    skillDict = {};

function submitt()
{
    let skill_sel=document.getElementById("skills");
    let proficiency_sel=document.getElementById("proficiency");
    let ski=skill_sel.options[skill_sel.selectedIndex].text;
    let prof=proficiency_sel.options[proficiency_sel.selectedIndex].text;
    let name= document.getElementById("in.name").value;
    let comments= document.getElementById("in.ac").value;
    if(name == "" || ski == "Select the skill." || prof == "Select my proficiency out of five.")
        alert("Please enter all the fields");

    else
    {
        let tbody = document.getElementById("T.body");
        let row = tbody.insertRow(0);
        let cell = row.insertCell(0);
        cell.innerHTML = comments;
        cell = row.insertCell(0);
        cell.innerHTML = prof;
        cell = row.insertCell(0);
        cell.innerHTML = ski;
        cell = row.insertCell(0);
        cell.innerHTML = name;
        if(skillDict[name] == null)
            skillDict[name] = [];
        skillDict[name].push({ski, prof, comments});
        window.localStorage.setItem("ski", JSON.stringify(skillDict));
    }
}