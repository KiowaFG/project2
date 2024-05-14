


  function Favorites() {
    const [games, setGames] = useState([])
    // state variable to disp[lay the details
    const [selectedGame, setSelectedGame] = useState(null);
  
    const getGames = async () => {
      const { data, error } = await supabase.from("games").select().eq("favorite", true)
      if (data) {
        console.log("The data is here! ", data);
        setGames(data);
      } else {
        console.log(error)
      }
    }
  

    return (
      <>
       <h1>Favorites!!!!!</h1>
      </>
    )
  }
  
  export default Favorites