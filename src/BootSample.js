import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Bootsample=()=>
{
    const Click=()=>
    {
        alert("Hello Everyonr..! Apple is mostly recommanted brand for everyone")
    }

    return(
        <>
        <button className="btn btn-outline-info" onClick={Click}>
            Apple<i class="bi bi-apple"></i>
        </button>
        
        </>


    );
}