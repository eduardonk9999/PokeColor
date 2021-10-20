import './style.css'


interface ButtonProps {
  handleClickID(id: number): void;
  title: string;
  id: number;

}

export function Pokebutton({handleClickID, title, id} : ButtonProps) {
  
  return(
    <button className="pokebutton" type="button" style={{background: `${title}`}}
        onClick={() => handleClickID(id)}
      >
        {title}
    </button>
  );
}