import z from "zod"
import { UserModel } from "../../models/User"

export interface DeleteUsersInputDTO {
  q: string,
  token: string
}

export type DeleteUserOutputDTO = string

export const DeleteUsersbyidSchema = z.object({
  q: z.string().min(1),
  token: z.string().min(1)
}).transform(data => data as DeleteUsersInputDTO)