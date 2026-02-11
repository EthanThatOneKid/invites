import { z } from "zod";

export interface ListParams {
  cursor?: string;
  limit: number;
  reverse: boolean;
}

export const listParamsSchema: z.ZodType<ListParams, z.ZodTypeDef, unknown> = z
  .object({
    cursor: z.string().optional(),
    limit: z.number().int().min(1).max(100).default(20),
    reverse: z.boolean().default(false),
  });

export interface CreateInviteParams {
  code?: string;
}

export const createInviteParamsSchema: z.ZodType<
  CreateInviteParams,
  z.ZodTypeDef,
  unknown
> = z.object(
  {
    code: z.string().optional(),
  },
);

export interface Invite {
  code: string;
  createdAt: number;
  redeemedBy: string | null;
  redeemedAt: number | null;
}

export const inviteSchema: z.ZodType<Invite> = z.object({
  code: z.string(),
  createdAt: z.number(),
  redeemedBy: z.string().nullable(),
  redeemedAt: z.number().nullable(),
});
