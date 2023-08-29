const image_container = document.querySelector('.images-container')


const ANIMAL_API = 'https://api.animality.xyz/all/'

const animal_list = ['cat', 'dog', 'bird', 'panda', 'redpanda', 'koala', 'whale', 'dolphin', 'kangaroo', 'frog', 'duck', 'penguin', 'axolotl', 'bear']

animal_list.forEach(animal => getItem(animal))


async function getItem(item){
    try{
        const {data} = await axios(ANIMAL_API + item)
        img_data = document.createElement('div')
        img_data.classList.add('image-container')
        img_data.innerHTML = `
                    <img src="${data.link}" alt="">
                    <div class='image-container-text'>
                    <strong>${data.animal}</strong>
                    <p>${data.fact}</p>
                    </div>
        `
        image_container.appendChild(img_data)
    }
    catch(err){
        console.log('shit')
        
    }
}

getItem()