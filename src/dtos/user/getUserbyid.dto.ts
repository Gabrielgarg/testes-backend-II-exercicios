import z from "zod"
import { UserModel } from "../../models/User"

export interface GetUsersbyidInputDTO {
  q: string,
  token: string
}

export type GetUsersbyidOutputDTO = UserModel

export const GetUsersbyidSchema = z.object({
  q: z.string().min(1).optional(),
  token: z.string().min(1)
}).transform(data => data as GetUsersbyidInputDTO)