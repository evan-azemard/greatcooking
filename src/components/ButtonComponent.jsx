import { Button } from "antd";
export const ButtonComponent = ({myFunction = () => {},children}) => {

    return (
        <>
            <Button style={{background: 'black', color: "white"}} onClick={myFunction}>
                {children}
            </Button>
        </>
    )
}