import { Button } from "./style";

interface ContinueProps{
    onClick?: () => void;
    content?: string
}


export const ContinueButton = ({onClick, content}: ContinueProps) => {
return <Button>{content !== undefined ? content : "CONTINUAR"}</Button>
}