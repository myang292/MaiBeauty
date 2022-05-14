const db = require('../db')
const { Bronzer, Brow, Foundation, Lipstick } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const eyes = await new Makeup({
        name: '',
        description: ''
    })
    eyes.save()

    const face = await new Makeup({
        name: '',
        description: ''
    })
    face.save()

    const lips = await new Makeup({
        name: '',
        description: ''
    })
    lips.save()


const bronzers = [
    {
    name: 'Rio',
    description: 'A buildable bronzer for light skin tones that adds a sun-kissed glow to the face.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_97906316cc4c460591cc9f0724534c70~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    },
    {
    name: 'Luxe',
    description: 'A buildable bronzer for medium skin tones that adds a sun-kissed glow to the face.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_fdb2400507564321845ab8cd2b550993~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    },
    {
    name: 'Island',
    description: 'A buildable bronzer for deep skin tones that adds a sun-kissed glow to the face.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_4b728d99fb0e4721923785c66efd4d19~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    }
]
const brows = [
    {
    name: 'Taupe',
    description: 'A brow tint that can be used to fill and set brows in place.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_b5566dea05374599b8d3e34c71536b81~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    },
    {
    name: 'Light Brown',
    description: 'A brow tint that can be used to fill and set brows in place.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_18383117bec74aff8d363996417b94a8~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    },
    {
    name: 'Dark Brown',
    description: 'A brow tint that can be used to fill and set brows in place.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_72c085d1c5dd433d9f98ad828a42b9ba~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    },
    {
    name: 'Ebony',
    description: 'A brow tint that can be used to fill and set brows in place.',
    photoUrl: 'https://static.wixstatic.com/media/d8d143_2a28ee9a4b2141aaa970939e2aa49dbb~mv2.jpg/v1/fill/w_313,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg'
    }
]
const foundations = [
    {
    name: '',
    description: '',
    photoUrl: ''
    },
    {
    name: '',
    description: '',
    photoUrl: ''
    },
    {
    name: '',
    description: '',
    photoUrl: ''
    },
    {
    name: '',
    description: '',
    photoUrl: ''
    }
]
const lipsticks = [
    {
    name: '',
    description: '',
    photoUrl: ''
    },
    {
    name: '',
    description: '',
    photoUrl: ''
    },
    {
    name: '',
    description: '',
    photoUrl: ''
    },
    {
    name: '',
    description: '',
    photoUrl: ''
    }
]



await Bronzer.insertMany(bronzers)
await Brow.insertMany(brows)
await Foundation.insertMany(foundations)
await Lipstick.insertMany(lipsticks)
console.log('Pokemon are here')
}

const run = async () => {
await main()
db.close
}

run()