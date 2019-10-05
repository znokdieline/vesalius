// Post
// const base_url = 'http://localhost:3000';

class ConnectionServices {

    get = (path, data, token) => {
        // console.log("tokeeeen =>",token)
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'body': JSON.stringify(data),
                'Authorization': token
            }
        }
        
        return fetch(`http://localhost:3000${path}`, options)
        .then(this.handleResponse).then(response => {return response})
        
    }
        //encarga parsear peticiones y regresar promises

    handleResponse = ( response ) => {
        return  response.text().then(
            text => {
                const data = text && JSON.parse(text)

                if( !response.ok ){
                    return Promise.reject(data)
                } 
                return data

            }
        )
    };
        //post

    post = (path, data) => {
        

        const optionsPost = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }
        
        return fetch(`http://localhost:3000${path}`, optionsPost)
        .then(this.handleResponse).then(response => {return response})
        
    }
    
    handleResponse = ( response ) => {

        return response.text().then(
            text => {
                const data = text && JSON.parse(text)
                
                if( !response.ok ){
                    return Promise.reject(data)
                }
                return data
            }
            )
        }
        
    }
    
    
    

const connectionServices = new ConnectionServices()

export {
    connectionServices
}