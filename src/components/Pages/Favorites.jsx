import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export const Favorites = () => {
    const [ load, setLoad ] = useState(true);

    return (
        <>
        <form action="POST">
            <Input type="search" id="input"/>
            <Button type="submit" id="button">Search</Button>
        </form>
        </>
      )
};

/*
un bouton ajouter et supprimer
et un tableau avec des donnée fictives
pour voir un rendu avant d'implémenter l'api dessus
Design navbar
Design footer
Design cards
Page favorites
*/