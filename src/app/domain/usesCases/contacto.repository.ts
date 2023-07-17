import { CrudBase } from "src/app/core/applications/contract/contacto.contract";
import { ContactoDto } from "../entities/contacto.dto";

export interface IContactoRepository extends CrudBase<ContactoDto>{

}
