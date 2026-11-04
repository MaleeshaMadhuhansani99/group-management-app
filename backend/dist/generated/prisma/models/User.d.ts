import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    passwordHash: string | null;
    googleId: string | null;
    emailVerifiedAt: Date | null;
    name: string | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    passwordHash: string | null;
    googleId: string | null;
    emailVerifiedAt: Date | null;
    name: string | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    passwordHash: number;
    googleId: number;
    emailVerifiedAt: number;
    name: number;
    image: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    passwordHash?: true;
    googleId?: true;
    emailVerifiedAt?: true;
    name?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    passwordHash?: true;
    googleId?: true;
    emailVerifiedAt?: true;
    name?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    passwordHash?: true;
    googleId?: true;
    emailVerifiedAt?: true;
    name?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    username: string | null;
    email: string;
    passwordHash: string | null;
    googleId: string | null;
    emailVerifiedAt: Date | null;
    name: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableFilter<"User"> | string | null;
    googleId?: Prisma.StringNullableFilter<"User"> | string | null;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdGroups?: Prisma.GroupListRelationFilter;
    memberships?: Prisma.GroupMemberListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    verificationTokens?: Prisma.EmailVerificationTokenListRelationFilter;
    createdInvitations?: Prisma.InvitationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdGroups?: Prisma.GroupOrderByRelationAggregateInput;
    memberships?: Prisma.GroupMemberOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    verificationTokens?: Prisma.EmailVerificationTokenOrderByRelationAggregateInput;
    createdInvitations?: Prisma.InvitationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    username?: string;
    email?: string;
    googleId?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringNullableFilter<"User"> | string | null;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    createdGroups?: Prisma.GroupListRelationFilter;
    memberships?: Prisma.GroupMemberListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    verificationTokens?: Prisma.EmailVerificationTokenListRelationFilter;
    createdInvitations?: Prisma.InvitationListRelationFilter;
}, "id" | "username" | "email" | "googleId">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    googleId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    emailVerifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUncheckedUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    googleId?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    googleId?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    googleId?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutVerificationTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVerificationTokensInput, Prisma.UserUncheckedCreateWithoutVerificationTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVerificationTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutVerificationTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVerificationTokensInput, Prisma.UserUncheckedCreateWithoutVerificationTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVerificationTokensInput;
    upsert?: Prisma.UserUpsertWithoutVerificationTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutVerificationTokensInput, Prisma.UserUpdateWithoutVerificationTokensInput>, Prisma.UserUncheckedUpdateWithoutVerificationTokensInput>;
};
export type UserCreateNestedOneWithoutCreatedGroupsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedGroupsInput, Prisma.UserUncheckedCreateWithoutCreatedGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedGroupsInput, Prisma.UserUncheckedCreateWithoutCreatedGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedGroupsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedGroupsInput, Prisma.UserUpdateWithoutCreatedGroupsInput>, Prisma.UserUncheckedUpdateWithoutCreatedGroupsInput>;
};
export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMembershipsInput, Prisma.UserUpdateWithoutMembershipsInput>, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserCreateNestedOneWithoutCreatedInvitationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedInvitationsInput, Prisma.UserUncheckedCreateWithoutCreatedInvitationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedInvitationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedInvitationsInput, Prisma.UserUncheckedCreateWithoutCreatedInvitationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedInvitationsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedInvitationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedInvitationsInput, Prisma.UserUpdateWithoutCreatedInvitationsInput>, Prisma.UserUncheckedUpdateWithoutCreatedInvitationsInput>;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUncheckedUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutVerificationTokensInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutVerificationTokensInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutVerificationTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutVerificationTokensInput, Prisma.UserUncheckedCreateWithoutVerificationTokensInput>;
};
export type UserUpsertWithoutVerificationTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutVerificationTokensInput, Prisma.UserUncheckedUpdateWithoutVerificationTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutVerificationTokensInput, Prisma.UserUncheckedCreateWithoutVerificationTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutVerificationTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutVerificationTokensInput, Prisma.UserUncheckedUpdateWithoutVerificationTokensInput>;
};
export type UserUpdateWithoutVerificationTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutVerificationTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUncheckedUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutCreatedGroupsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutCreatedGroupsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutCreatedGroupsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedGroupsInput, Prisma.UserUncheckedCreateWithoutCreatedGroupsInput>;
};
export type UserUpsertWithoutCreatedGroupsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedGroupsInput, Prisma.UserUncheckedUpdateWithoutCreatedGroupsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedGroupsInput, Prisma.UserUncheckedCreateWithoutCreatedGroupsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedGroupsInput, Prisma.UserUncheckedUpdateWithoutCreatedGroupsInput>;
};
export type UserUpdateWithoutCreatedGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutMembershipsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupCreateNestedManyWithoutCreatedByInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutCreatedByInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    createdInvitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
};
export type UserUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUpdateManyWithoutCreatedByNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUncheckedUpdateManyWithoutCreatedByNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    createdInvitations?: Prisma.InvitationUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutCreatedInvitationsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreatedInvitationsInput = {
    id?: string;
    username?: string | null;
    email: string;
    passwordHash?: string | null;
    googleId?: string | null;
    emailVerifiedAt?: Date | string | null;
    name?: string | null;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutCreatedByInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreatedInvitationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedInvitationsInput, Prisma.UserUncheckedCreateWithoutCreatedInvitationsInput>;
};
export type UserUpsertWithoutCreatedInvitationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedInvitationsInput, Prisma.UserUncheckedUpdateWithoutCreatedInvitationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedInvitationsInput, Prisma.UserUncheckedCreateWithoutCreatedInvitationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedInvitationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedInvitationsInput, Prisma.UserUncheckedUpdateWithoutCreatedInvitationsInput>;
};
export type UserUpdateWithoutCreatedInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdGroups?: Prisma.GroupUncheckedUpdateManyWithoutCreatedByNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    verificationTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    createdGroups: number;
    memberships: number;
    sessions: number;
    verificationTokens: number;
    createdInvitations: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdGroups?: boolean | UserCountOutputTypeCountCreatedGroupsArgs;
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    verificationTokens?: boolean | UserCountOutputTypeCountVerificationTokensArgs;
    createdInvitations?: boolean | UserCountOutputTypeCountCreatedInvitationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupMemberWhereInput;
};
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountVerificationTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailVerificationTokenWhereInput;
};
export type UserCountOutputTypeCountCreatedInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    googleId?: boolean;
    emailVerifiedAt?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdGroups?: boolean | Prisma.User$createdGroupsArgs<ExtArgs>;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    verificationTokens?: boolean | Prisma.User$verificationTokensArgs<ExtArgs>;
    createdInvitations?: boolean | Prisma.User$createdInvitationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    googleId?: boolean;
    emailVerifiedAt?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    googleId?: boolean;
    emailVerifiedAt?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    googleId?: boolean;
    emailVerifiedAt?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "googleId" | "emailVerifiedAt" | "name" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdGroups?: boolean | Prisma.User$createdGroupsArgs<ExtArgs>;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    verificationTokens?: boolean | Prisma.User$verificationTokensArgs<ExtArgs>;
    createdInvitations?: boolean | Prisma.User$createdInvitationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        createdGroups: Prisma.$GroupPayload<ExtArgs>[];
        memberships: Prisma.$GroupMemberPayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        verificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[];
        createdInvitations: Prisma.$InvitationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        username: string | null;
        email: string;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        name: string | null;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdGroups<T extends Prisma.User$createdGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    memberships<T extends Prisma.User$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    verificationTokens<T extends Prisma.User$verificationTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$verificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdInvitations<T extends Prisma.User$createdInvitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdInvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly googleId: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerifiedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly image: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$createdGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type User$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    where?: Prisma.GroupMemberWhereInput;
    orderBy?: Prisma.GroupMemberOrderByWithRelationInput | Prisma.GroupMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupMemberScalarFieldEnum | Prisma.GroupMemberScalarFieldEnum[];
};
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionSelect<ExtArgs> | null;
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$verificationTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithRelationInput | Prisma.EmailVerificationTokenOrderByWithRelationInput[];
    cursor?: Prisma.EmailVerificationTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailVerificationTokenScalarFieldEnum | Prisma.EmailVerificationTokenScalarFieldEnum[];
};
export type User$createdInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where?: Prisma.InvitationWhereInput;
    orderBy?: Prisma.InvitationOrderByWithRelationInput | Prisma.InvitationOrderByWithRelationInput[];
    cursor?: Prisma.InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationScalarFieldEnum | Prisma.InvitationScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
