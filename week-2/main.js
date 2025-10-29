 document.querySelector(".registration-form").addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.querySelector('input[name="name"]').value;
          const roll = document.querySelector('input[name="roll"]').value;
          const department = document.querySelector(
            'input[name="department"]'
          ).value;
          const semester = document.querySelector('select[name="semester"]').value;
          const email = document.querySelector('input[name="email"]').value;
          const genderInput = document.querySelector(
            'input[name="gender"]:checked'
          );
          const gender = genderInput ? genderInput.value : "N/A"; 
          const dob = document.querySelector('input[name="dob"]').value;
          const tableBody = document.querySelector("table tbody");

        
          const newRow = document.createElement("tr");

          newRow.innerHTML = `
            <td>${name}</td>
            <td>${roll}</td>
            <td>${department}</td>
            <td>${semester}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${dob}</td>
          `;

          tableBody.appendChild(newRow);

          event.target.reset();
        });