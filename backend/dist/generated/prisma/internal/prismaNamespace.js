import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Session: 'Session',
    EmailVerificationToken: 'EmailVerificationToken',
    Group: 'Group',
    GroupMember: 'GroupMember',
    Invitation: 'Invitation'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    googleId: 'googleId',
    emailVerifiedAt: 'emailVerifiedAt',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
export const EmailVerificationTokenScalarFieldEnum = {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const GroupScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const GroupMemberScalarFieldEnum = {
    id: 'id',
    role: 'role',
    userId: 'userId',
    groupId: 'groupId',
    joinedAt: 'joinedAt'
};
export const InvitationScalarFieldEnum = {
    id: 'id',
    tokenHash: 'tokenHash',
    groupId: 'groupId',
    createdById: 'createdById',
    role: 'role',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    maxUses: 'maxUses',
    useCount: 'useCount',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map