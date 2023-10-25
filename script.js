document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
  
    // Formdaki inputlardan dəyərlərimizi alırıq
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const isMarried = document.getElementById("isMarried").checked ? "Yes" : "No";
  
    // Inputların dəqiq boş olduğunu yoxlayırıq, eger bos olsa verdiyim cumle cixacaq
    if (firstname === "" || lastname === "" || age === "") {
      alert("Please fill in all fields.");
      return;
    }

    // tabellerim
    const tr=document.createElement('tr');
    const firstname1=document.createElement('td');
    const lastname1=document.createElement('td');
    const age1=document.createElement('td');
    const isMarried1=document.createElement('td');

    firstname1.innerHTML=firstname
    lastname1.innerHTML=lastname
    age1.innerHTML=age
    isMarried1.innerHTML=isMarried

    tr.append(firstname1,lastname1,age1,isMarried1);
    userData.append(tr);
    
    // Formu sıfırlayırıq
    document.getElementById("userForm").reset();
  });