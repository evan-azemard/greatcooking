import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
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
        <Navbar />
        </>
      )
};

/*un form type search
un bouton ajouter et supprimer
et un tableaux avec des donnée fictives
pour voir un rendu avant d'implémenter l'api dessus
Design navbar
Design footer
Design cards
Page favorites
*/