// serial number
let serial = 0;
// 1st geometric for Triangle
// calculate button catch
document.getElementById('btn-triangle-calculate').addEventListener('click', function () {
    const triangleInputFieldIdB = getInputFieldData('input-a-triangle');
    const triangleInputFieldIdH = getInputFieldData('input-b-triangle');
    if (triangleInputFieldIdB === "" || triangleInputFieldIdH === "") {
        alert('Please input field check!!!!!!!!');
        return
    }
    else if (isNaN(triangleInputFieldIdB) === true || isNaN(triangleInputFieldIdH) === true) {
        alert('Please input valid number!!!!!!')
        return
    }
    else if (0 > triangleInputFieldIdB || 0 > triangleInputFieldIdH) {
        alert('Do not allow negative value')
        return
    }
    serial += 1;
    //calculation
    // call results function 1
    const TriangleCalculation = resultCalculation (triangleInputFieldIdB, triangleInputFieldIdH);
    const cardTitle = document.getElementById('title-triangle');
    const title =cardTitle.innerText;
    // appended part
    const appendList = document.getElementById('list-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${TriangleCalculation}cm<sup>2</sup></td>
    <td>
    <button class="text-sm py-1 my-2 px-1 bg-emerald-400 rounded-lg">convert to m<sup>2</sup></button>
    </td>
    `;
    appendList.appendChild(tableRow);
    inputFieldClear('input-a-triangle');
    inputFieldClear('input-b-triangle');
})
// 2nd geometric for Rectangle
// calculate button catch
document.getElementById('btn-rectangle-calculate').addEventListener('click', function () {
    const rectangleInputFieldIdB = getInputFieldData('input-a-rectangle');
    const rectangleInputFieldIdH = getInputFieldData('input-b-rectangle');
    if (rectangleInputFieldIdB === "" || rectangleInputFieldIdH === "") {
        alert('Please input field check!!!!!!!!');
        return
    }
    else if (isNaN(rectangleInputFieldIdB) === true || isNaN(rectangleInputFieldIdH) === true) {
        alert('Please input valid number!!!!!!')
        return
    }
    else if (0 > rectangleInputFieldIdB || 0 > rectangleInputFieldIdH) {
        alert('Do not allow negative value')
        return
    }
    serial += 1;
    //calculation with all getCalculation function
    const rectangleCalculation = getCalculation (rectangleInputFieldIdB, rectangleInputFieldIdH);
    const cardTitle = document.getElementById('title-rectangle');
    const title =cardTitle.innerText;
    // appended part
    const appendList = document.getElementById('list-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${rectangleCalculation}cm<sup>2</sup></td>
    <td>
    <button class="text-sm py-1 my-2 px-1 bg-emerald-400 rounded-lg">convert to m<sup>2</sup></button>
    </td>
    `;
    appendList.appendChild(tableRow);
    inputFieldClear('input-a-rectangle');
    inputFieldClear('input-b-rectangle');
})
// 3rd geometric for Parallelogram
// calculate button catch
document.getElementById('btn-parallelogram-calculate').addEventListener('click', function () {
    const parallelogramInputFieldIdB = getInputFieldData('input-a-parallelogram');
    const parallelogramInputFieldIdH = getInputFieldData('input-b-parallelogram');
    if (parallelogramInputFieldIdB === "" || parallelogramInputFieldIdH === "") {
        alert('Please input field check!!!!!!!!');
        return
    }
    else if (isNaN(parallelogramInputFieldIdB) === true || isNaN(parallelogramInputFieldIdH) === true) {
        alert('Please input valid number!!!!!!')
        return
    }
    else if (0 > parallelogramInputFieldIdB || 0 > parallelogramInputFieldIdH) {
        alert('Do not allow negative value')
        return
    }
    serial += 1;
    //calculation with all getCalculation function
    const parallelogramCalculation = getCalculation (parallelogramInputFieldIdB, parallelogramInputFieldIdH);
    const cardTitle = document.getElementById('title-parallelogram');
    const title =cardTitle.innerText;
    // appended part
    const appendList = document.getElementById('list-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${parallelogramCalculation}cm<sup>2</sup></td>
    <td>
    <button class="text-sm py-1 my-2 px-1 bg-emerald-400 rounded-lg">convert to m<sup>2</sup></button>
    </td>
    `;
    appendList.appendChild(tableRow);
    inputFieldClear('input-a-parallelogram');
    inputFieldClear('input-b-parallelogram');
})
// 4th geometric for Rhombus
// calculate button catch
document.getElementById('btn-rhombus-calculate').addEventListener('click', function () {
    const rhombusInputFieldIdB = getInputFieldData('input-a-rhombus');
    const rhombusInputFieldIdH = getInputFieldData('input-b-rhombus');
    if (rhombusInputFieldIdB === "" || rhombusInputFieldIdH === "") {
        alert('Please input field check!!!!!!!!');
        return
    }
    else if (isNaN(rhombusInputFieldIdB) === true || isNaN(rhombusInputFieldIdH) === true) {
        alert('Please input valid number!!!!!!')
        return
    }
    else if (0 > rhombusInputFieldIdB || 0 > rhombusInputFieldIdH) {
        alert('Do not allow negative value')
        return
    }
    serial += 1;
    //calculation 
    // call results function 1
    const rhombusCalculation = resultCalculation (rhombusInputFieldIdB, rhombusInputFieldIdH)
    const cardTitle = document.getElementById('title-rhombus');
    const title =cardTitle.innerText;
    // appended part
    const appendList = document.getElementById('list-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${rhombusCalculation}cm<sup>2</sup></td>
    <td>
    <button class="text-sm py-1 my-2 px-1 bg-emerald-400 rounded-lg">convert to m<sup>2</sup></button>
    </td>
    `;
    appendList.appendChild(tableRow);
    inputFieldClear('input-a-rhombus');
    inputFieldClear('input-b-rhombus');
})
// 5th geometric for Pentagon
// calculate button catch
document.getElementById('btn-pentagon-calculate').addEventListener('click', function () {
    const pentagonInputFieldIdB = getInputFieldData('input-a-pentagon');
    const pentagonInputFieldIdH = getInputFieldData('input-b-pentagon');
    if (pentagonInputFieldIdB === "" || pentagonInputFieldIdH === "") {
        alert('Please input field check!!!!!!!!');
        return
    }
    else if (isNaN(pentagonInputFieldIdB) === true || isNaN(pentagonInputFieldIdH) === true) {
        alert('Please input valid number!!!!!!')
        return
    }
    else if (0 > pentagonInputFieldIdB || 0 > pentagonInputFieldIdH) {
        alert('Do not allow negative value')
        return
    }
    serial += 1;
    //calculation 
    // call results function 1
    const pentagonCalculation = resultCalculation (pentagonInputFieldIdB, pentagonInputFieldIdH);
    const cardTitle = document.getElementById('title-pentagon');
    const title =cardTitle.innerText;
    // appended part
    const appendList = document.getElementById('list-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${pentagonCalculation}cm<sup>2</sup></td>
    <td>
    <button class="text-sm py-1 my-2 px-1 bg-emerald-400 rounded-lg">convert to m<sup>2</sup></button>
    </td>
    `;
    appendList.appendChild(tableRow);
    inputFieldClear('input-a-pentagon');
    inputFieldClear('input-b-pentagon');
})
// 6th geometric for Ellipse
// calculate button catch
document.getElementById('btn-ellipse-calculate').addEventListener('click', function () {
    const ellipseInputFieldIdB = getInputFieldData('input-a-ellipse');
    const ellipseInputFieldIdH = getInputFieldData('input-b-ellipse');
    if (ellipseInputFieldIdB === "" || ellipseInputFieldIdH === "") {
        alert('Please input field check!!!!!!!!');
        return
    }
    else if (isNaN(ellipseInputFieldIdB) === true || isNaN(ellipseInputFieldIdH) === true) {
        alert('Please input valid number!!!!!!')
        return
    }
    else if (0 > ellipseInputFieldIdB || 0 > ellipseInputFieldIdH) {
        alert('Do not allow negative value')
        return
    }
    serial += 1;
    //calculation
    // call results function 3
    const ellipseCalculation = resultEllipseCalculation (ellipseInputFieldIdB, ellipseInputFieldIdH);
    const cardTitle = document.getElementById('title-ellipse');
    const title =cardTitle.innerText;
    // appended part
    const appendList = document.getElementById('list-container');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${ellipseCalculation}cm<sup>2</sup></td>
    <td>
    <button class="text-sm py-1 my-2 px-1 bg-emerald-400 rounded-lg">convert to m<sup>2</sup></button>
    </td>
    `;
    appendList.appendChild(tableRow);
    inputFieldClear('input-a-ellipse');
    inputFieldClear('input-b-ellipse');
})
