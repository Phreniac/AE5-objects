//Objetos




function generateUsers(type,quant){
    console.log('entra a generar usuarios');
    const user_list = [];
    const name_list = ['Adrian', 'Gonzalo','Pedro', 'Julieta','Constanza'];
    const last_name_list = ['Jara', 'Loyola', 'Flores', 'Swanson', 'Toro'];
    const phone_list = ['123123', '12312323', '12312323','1231242323','412354123'];
    const address_list = ['Calle falsa 123', 'Avenida siempre viva 444', 'Los torreones 1234', 'Alberto gomez 132', 'Laguna roja 3234'];
    const size_list = ['S', 'L', 'M', 'XL', 'XXXXL'];
    console.log('genera las listas');
    if(type === 'estandar'){
        console.log('coincide el tipo');
        for (let i = 0; i < quant; i++) {
            const user = {
                name: '',
                last_name: '',
                phone: '',
                address: '',
                clothes:[],
                size: 0
            };
            let random_num = Math.floor(Math.random() * (name_list.length - 1));
            console.log('numero random', random_num);
            user.name = name_list[random_num];
            user.last_name = last_name_list[Math.floor(Math.random() * (last_name_list.length - 1))];
            user.phone = phone_list[Math.floor(Math.random() * (phone_list.length - 1))];
            user.address = address_list[Math.floor(Math.random() * (address_list.length - 1))];
            user.size = size_list[Math.floor(Math.random() * (size_list.length - 1))];
            user.clothes = generateClothes(3);
            user_list.push(user);
        }
    }
    return user_list;
}

function generateClothes (quant){
    const response = [];
    const clothes_type_list = ['camisa', 'pantalon','chaqueta', 'polera','gorros'];
    const clothes_material_list = ['algodon', 'poliester', 'jeans'];
    const clothes_color_parts = ['rojo', 'morado', 'verde', 'amarillo', 'rosado'];
    for (let i = 0; i < quant; i++) {
        const clothes = {
            id:'',
            type:'',
            material:'',
            color:''
        }
        clothes.id = (i + 1);
        clothes.type = clothes_type_list[Math.floor(Math.random() * (clothes_type_list.length - 1))];
        clothes.material = clothes_material_list[Math.floor(Math.random() * (clothes_material_list.length - 1))];
        clothes.color = clothes_color_parts[Math.floor(Math.random() * (clothes_color_parts.length - 1))];
        response.push(clothes);
    }
    return response;
}

function generateTable(user_list){
    const table_body = document.getElementById('table_body');
    let html_content = '';
    for (let i = 0; i < user_list.length; i++){
        console.log(i);
        html_content += `<tr>
            <td>${user_list[i].name}</td>
            <td>${user_list[i].last_name}</td>
            <td>${user_list[i].phone}</td>
            <td>${user_list[i].address}</td>
            <td>${user_list[i].size}</td>`;
        const user_clothes = user_list[i].clothes.length;
        for (let j = 0; j < user_clothes; j++) {
            html_content += `<td>
                <ul>
                    <li>${user_list[i].clothes[j].type}</li>
                    <li>${user_list[i].clothes[j].color}</li>
                    <li>${user_list[i].clothes[j].material}</li>
                </ul>
            </td>`;
        }
        html_content += '</tr>';
        console.log('content', html_content);
        table_body.innerHTML = html_content;
    }
}
console.log('random: ', Math.floor(Math.random() * (5 - 1 + 1)) + 1);
let users = generateUsers('estandar', 10);
console.log(users);
generateTable(users);