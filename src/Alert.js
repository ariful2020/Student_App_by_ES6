
class Alert {
    static danger (msg){
        return `<p class="alert alert-danger">${msg}<button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="alert"></button></p>`
    }
    static success (msg){
        return `<p class="alert alert-success">${msg}<button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="alert"></button></p>`
    }
    
}

export default Alert;