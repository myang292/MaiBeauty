import React from 'react'

const Footer = () => {


    return(
        <div>
            <footer>
                <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' alt ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' style={{width:33}} onClick={() => window.open('https://www.linkedin.com/in/myang292/', '_blank')}/>
                <img src ='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png' alt ='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png' style={{height:30}} onClick={() => window.open('https://github.com/myang292', '_blank')}/>
                <img src ='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png' style={{height:30}} onClick={() => window.open('mailto:myang292@gmail.com')}/>
            </footer>
        </div>


    )
}

export default Footer