import { useForm } from "react-hook-form";
import { Button, Container, Header, Input } from "../../components";
import ContactsService from "../../services/Contacts.service";
import ContactCard from "../../components/ContactCard";
import emptyBox from "../../assets/icons/triste.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import type { IContact } from "../../@types/Contact";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  const [allContacts, setAllContacts] = useState<IContact[]>(
    ContactsService.get()
  );

  const { register, watch } = useForm({
    defaultValues: { filter: "" },
  });

  const filter = watch("filter");

  const filteredContacts = useMemo(() => {
    if (!filter) return allContacts;
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, allContacts]);

  const handleDelete = useCallback((contactId: string) => {
    ContactsService.delete(contactId);
    setAllContacts(ContactsService.get());
  }, []);

  return (
    <Container>
      <Header />
      <div style={{ margin: "16px 0" }} />
      <Input
        name="filter"
        placeholder="Pesquisar contato"
        register={register}
      />
      <Link className={styles.link} to="/create">
        <Button>Novo Contato</Button>
      </Link>

      {filteredContacts.length === 0 ? (
        <div className={styles.emptyBox}>
          <img src={emptyBox} alt="vazio" />
          <p>
         Tristeza... Nenhum contato cadastrado!  
Clique no botão <span>"Novo contato"</span> acima para adicionar seu primeiro contato.

          </p>
        </div>
      ) : (
        filteredContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            data={contact}
            onDelete={() => handleDelete(contact.id)}
          />
        ))
      )}
    </Container>
  );
}
