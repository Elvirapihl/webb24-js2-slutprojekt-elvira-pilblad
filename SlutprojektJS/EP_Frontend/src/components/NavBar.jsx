export function NavBar({setChangePage, cartItems}){

    function handleClick(page){
        setChangePage(page);
    }

    return(
        <>
        <h1> Gott & blandat </h1>
        <div className="classButton">

        <button onClick={() => handleClick("browsing")}> Produkter </button>
        <button onClick={() => handleClick("buying")}> Kundvagn ({cartItems.length}) </button>

        </div>
        </>
    )
}