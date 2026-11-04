import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvitationModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitationPayload>;
export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null;
    _avg: InvitationAvgAggregateOutputType | null;
    _sum: InvitationSumAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
};
export type InvitationAvgAggregateOutputType = {
    maxUses: number | null;
    useCount: number | null;
};
export type InvitationSumAggregateOutputType = {
    maxUses: number | null;
    useCount: number | null;
};
export type InvitationMinAggregateOutputType = {
    id: string | null;
    tokenHash: string | null;
    groupId: string | null;
    createdById: string | null;
    role: $Enums.GroupRole | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    maxUses: number | null;
    useCount: number | null;
    createdAt: Date | null;
};
export type InvitationMaxAggregateOutputType = {
    id: string | null;
    tokenHash: string | null;
    groupId: string | null;
    createdById: string | null;
    role: $Enums.GroupRole | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    maxUses: number | null;
    useCount: number | null;
    createdAt: Date | null;
};
export type InvitationCountAggregateOutputType = {
    id: number;
    tokenHash: number;
    groupId: number;
    createdById: number;
    role: number;
    expiresAt: number;
    revokedAt: number;
    maxUses: number;
    useCount: number;
    createdAt: number;
    _all: number;
};
export type InvitationAvgAggregateInputType = {
    maxUses?: true;
    useCount?: true;
};
export type InvitationSumAggregateInputType = {
    maxUses?: true;
    useCount?: true;
};
export type InvitationMinAggregateInputType = {
    id?: true;
    tokenHash?: true;
    groupId?: true;
    createdById?: true;
    role?: true;
    expiresAt?: true;
    revokedAt?: true;
    maxUses?: true;
    useCount?: true;
    createdAt?: true;
};
export type InvitationMaxAggregateInputType = {
    id?: true;
    tokenHash?: true;
    groupId?: true;
    createdById?: true;
    role?: true;
    expiresAt?: true;
    revokedAt?: true;
    maxUses?: true;
    useCount?: true;
    createdAt?: true;
};
export type InvitationCountAggregateInputType = {
    id?: true;
    tokenHash?: true;
    groupId?: true;
    createdById?: true;
    role?: true;
    expiresAt?: true;
    revokedAt?: true;
    maxUses?: true;
    useCount?: true;
    createdAt?: true;
    _all?: true;
};
export type InvitationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
    orderBy?: Prisma.InvitationOrderByWithRelationInput | Prisma.InvitationOrderByWithRelationInput[];
    cursor?: Prisma.InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvitationCountAggregateInputType;
    _avg?: InvitationAvgAggregateInputType;
    _sum?: InvitationSumAggregateInputType;
    _min?: InvitationMinAggregateInputType;
    _max?: InvitationMaxAggregateInputType;
};
export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvitation[P]> : Prisma.GetScalarType<T[P], AggregateInvitation[P]>;
};
export type InvitationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
    orderBy?: Prisma.InvitationOrderByWithAggregationInput | Prisma.InvitationOrderByWithAggregationInput[];
    by: Prisma.InvitationScalarFieldEnum[] | Prisma.InvitationScalarFieldEnum;
    having?: Prisma.InvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationCountAggregateInputType | true;
    _avg?: InvitationAvgAggregateInputType;
    _sum?: InvitationSumAggregateInputType;
    _min?: InvitationMinAggregateInputType;
    _max?: InvitationMaxAggregateInputType;
};
export type InvitationGroupByOutputType = {
    id: string;
    tokenHash: string;
    groupId: string;
    createdById: string;
    role: $Enums.GroupRole;
    expiresAt: Date;
    revokedAt: Date | null;
    maxUses: number | null;
    useCount: number;
    createdAt: Date;
    _count: InvitationCountAggregateOutputType | null;
    _avg: InvitationAvgAggregateOutputType | null;
    _sum: InvitationSumAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
};
export type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvitationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvitationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvitationGroupByOutputType[P]>;
}>>;
export type InvitationWhereInput = {
    AND?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    OR?: Prisma.InvitationWhereInput[];
    NOT?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    id?: Prisma.StringFilter<"Invitation"> | string;
    tokenHash?: Prisma.StringFilter<"Invitation"> | string;
    groupId?: Prisma.StringFilter<"Invitation"> | string;
    createdById?: Prisma.StringFilter<"Invitation"> | string;
    role?: Prisma.EnumGroupRoleFilter<"Invitation"> | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    maxUses?: Prisma.IntNullableFilter<"Invitation"> | number | null;
    useCount?: Prisma.IntFilter<"Invitation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type InvitationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxUses?: Prisma.SortOrderInput | Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
};
export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    OR?: Prisma.InvitationWhereInput[];
    NOT?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    groupId?: Prisma.StringFilter<"Invitation"> | string;
    createdById?: Prisma.StringFilter<"Invitation"> | string;
    role?: Prisma.EnumGroupRoleFilter<"Invitation"> | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    maxUses?: Prisma.IntNullableFilter<"Invitation"> | number | null;
    useCount?: Prisma.IntFilter<"Invitation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "tokenHash">;
export type InvitationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxUses?: Prisma.SortOrderInput | Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvitationCountOrderByAggregateInput;
    _avg?: Prisma.InvitationAvgOrderByAggregateInput;
    _max?: Prisma.InvitationMaxOrderByAggregateInput;
    _min?: Prisma.InvitationMinOrderByAggregateInput;
    _sum?: Prisma.InvitationSumOrderByAggregateInput;
};
export type InvitationScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvitationScalarWhereWithAggregatesInput | Prisma.InvitationScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvitationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvitationScalarWhereWithAggregatesInput | Prisma.InvitationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    groupId?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    role?: Prisma.EnumGroupRoleWithAggregatesFilter<"Invitation"> | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Invitation"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null;
    maxUses?: Prisma.IntNullableWithAggregatesFilter<"Invitation"> | number | null;
    useCount?: Prisma.IntWithAggregatesFilter<"Invitation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invitation"> | Date | string;
};
export type InvitationCreateInput = {
    id?: string;
    tokenHash: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutInvitationsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedInvitationsInput;
};
export type InvitationUncheckedCreateInput = {
    id?: string;
    tokenHash: string;
    groupId: string;
    createdById: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
};
export type InvitationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutInvitationsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput;
};
export type InvitationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationCreateManyInput = {
    id?: string;
    tokenHash: string;
    groupId: string;
    createdById: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
};
export type InvitationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationListRelationFilter = {
    every?: Prisma.InvitationWhereInput;
    some?: Prisma.InvitationWhereInput;
    none?: Prisma.InvitationWhereInput;
};
export type InvitationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvitationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    maxUses?: Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationAvgOrderByAggregateInput = {
    maxUses?: Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
};
export type InvitationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    maxUses?: Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    maxUses?: Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationSumOrderByAggregateInput = {
    maxUses?: Prisma.SortOrder;
    useCount?: Prisma.SortOrder;
};
export type InvitationCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutCreatedByInput, Prisma.InvitationUncheckedCreateWithoutCreatedByInput> | Prisma.InvitationCreateWithoutCreatedByInput[] | Prisma.InvitationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutCreatedByInput | Prisma.InvitationCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.InvitationCreateManyCreatedByInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutCreatedByInput, Prisma.InvitationUncheckedCreateWithoutCreatedByInput> | Prisma.InvitationCreateWithoutCreatedByInput[] | Prisma.InvitationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutCreatedByInput | Prisma.InvitationCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.InvitationCreateManyCreatedByInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutCreatedByInput, Prisma.InvitationUncheckedCreateWithoutCreatedByInput> | Prisma.InvitationCreateWithoutCreatedByInput[] | Prisma.InvitationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutCreatedByInput | Prisma.InvitationCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.InvitationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.InvitationCreateManyCreatedByInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.InvitationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutCreatedByInput | Prisma.InvitationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutCreatedByInput, Prisma.InvitationUncheckedCreateWithoutCreatedByInput> | Prisma.InvitationCreateWithoutCreatedByInput[] | Prisma.InvitationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutCreatedByInput | Prisma.InvitationCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.InvitationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.InvitationCreateManyCreatedByInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.InvitationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutCreatedByInput | Prisma.InvitationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutGroupInput | Prisma.InvitationUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutGroupInput | Prisma.InvitationUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type InvitationCreateWithoutCreatedByInput = {
    id?: string;
    tokenHash: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutInvitationsInput;
};
export type InvitationUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    tokenHash: string;
    groupId: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
};
export type InvitationCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutCreatedByInput, Prisma.InvitationUncheckedCreateWithoutCreatedByInput>;
};
export type InvitationCreateManyCreatedByInputEnvelope = {
    data: Prisma.InvitationCreateManyCreatedByInput | Prisma.InvitationCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type InvitationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.InvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutCreatedByInput, Prisma.InvitationUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutCreatedByInput, Prisma.InvitationUncheckedCreateWithoutCreatedByInput>;
};
export type InvitationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.InvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutCreatedByInput, Prisma.InvitationUncheckedUpdateWithoutCreatedByInput>;
};
export type InvitationUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.InvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyWithoutCreatedByInput>;
};
export type InvitationScalarWhereInput = {
    AND?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
    OR?: Prisma.InvitationScalarWhereInput[];
    NOT?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
    id?: Prisma.StringFilter<"Invitation"> | string;
    tokenHash?: Prisma.StringFilter<"Invitation"> | string;
    groupId?: Prisma.StringFilter<"Invitation"> | string;
    createdById?: Prisma.StringFilter<"Invitation"> | string;
    role?: Prisma.EnumGroupRoleFilter<"Invitation"> | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    maxUses?: Prisma.IntNullableFilter<"Invitation"> | number | null;
    useCount?: Prisma.IntFilter<"Invitation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
};
export type InvitationCreateWithoutGroupInput = {
    id?: string;
    tokenHash: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedInvitationsInput;
};
export type InvitationUncheckedCreateWithoutGroupInput = {
    id?: string;
    tokenHash: string;
    createdById: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
};
export type InvitationCreateOrConnectWithoutGroupInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput>;
};
export type InvitationCreateManyGroupInputEnvelope = {
    data: Prisma.InvitationCreateManyGroupInput | Prisma.InvitationCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type InvitationUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.InvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutGroupInput, Prisma.InvitationUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput>;
};
export type InvitationUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.InvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutGroupInput, Prisma.InvitationUncheckedUpdateWithoutGroupInput>;
};
export type InvitationUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.InvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyWithoutGroupInput>;
};
export type InvitationCreateManyCreatedByInput = {
    id?: string;
    tokenHash: string;
    groupId: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
};
export type InvitationUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutInvitationsNestedInput;
};
export type InvitationUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationCreateManyGroupInput = {
    id?: string;
    tokenHash: string;
    createdById: string;
    role?: $Enums.GroupRole;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    maxUses?: number | null;
    useCount?: number;
    createdAt?: Date | string;
};
export type InvitationUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedInvitationsNestedInput;
};
export type InvitationUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumGroupRoleFieldUpdateOperationsInput | $Enums.GroupRole;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxUses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    useCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tokenHash?: boolean;
    groupId?: boolean;
    createdById?: boolean;
    role?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    maxUses?: boolean;
    useCount?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitation"]>;
export type InvitationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tokenHash?: boolean;
    groupId?: boolean;
    createdById?: boolean;
    role?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    maxUses?: boolean;
    useCount?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitation"]>;
export type InvitationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tokenHash?: boolean;
    groupId?: boolean;
    createdById?: boolean;
    role?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    maxUses?: boolean;
    useCount?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitation"]>;
export type InvitationSelectScalar = {
    id?: boolean;
    tokenHash?: boolean;
    groupId?: boolean;
    createdById?: boolean;
    role?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    maxUses?: boolean;
    useCount?: boolean;
    createdAt?: boolean;
};
export type InvitationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tokenHash" | "groupId" | "createdById" | "role" | "expiresAt" | "revokedAt" | "maxUses" | "useCount" | "createdAt", ExtArgs["result"]["invitation"]>;
export type InvitationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type InvitationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $InvitationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invitation";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tokenHash: string;
        groupId: string;
        createdById: string;
        role: $Enums.GroupRole;
        expiresAt: Date;
        revokedAt: Date | null;
        maxUses: number | null;
        useCount: number;
        createdAt: Date;
    }, ExtArgs["result"]["invitation"]>;
    composites: {};
};
export type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitationPayload, S>;
export type InvitationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvitationCountAggregateInputType | true;
};
export interface InvitationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invitation'];
        meta: {
            name: 'Invitation';
        };
    };
    findUnique<T extends InvitationFindUniqueArgs>(args: Prisma.SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvitationFindFirstArgs>(args?: Prisma.SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvitationFindManyArgs>(args?: Prisma.SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvitationCreateArgs>(args: Prisma.SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvitationCreateManyArgs>(args?: Prisma.SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvitationDeleteArgs>(args: Prisma.SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvitationUpdateArgs>(args: Prisma.SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvitationDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvitationUpdateManyArgs>(args: Prisma.SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvitationUpsertArgs>(args: Prisma.SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvitationCountArgs>(args?: Prisma.Subset<T, InvitationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvitationCountAggregateOutputType> : number>;
    aggregate<T extends InvitationAggregateArgs>(args: Prisma.Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>;
    groupBy<T extends InvitationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvitationGroupByArgs['orderBy'];
    } : {
        orderBy?: InvitationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvitationFieldRefs;
}
export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvitationFieldRefs {
    readonly id: Prisma.FieldRef<"Invitation", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"Invitation", 'String'>;
    readonly groupId: Prisma.FieldRef<"Invitation", 'String'>;
    readonly createdById: Prisma.FieldRef<"Invitation", 'String'>;
    readonly role: Prisma.FieldRef<"Invitation", 'GroupRole'>;
    readonly expiresAt: Prisma.FieldRef<"Invitation", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"Invitation", 'DateTime'>;
    readonly maxUses: Prisma.FieldRef<"Invitation", 'Int'>;
    readonly useCount: Prisma.FieldRef<"Invitation", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Invitation", 'DateTime'>;
}
export type InvitationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvitationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvitationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvitationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationCreateInput, Prisma.InvitationUncheckedCreateInput>;
};
export type InvitationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvitationCreateManyInput | Prisma.InvitationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvitationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    data: Prisma.InvitationCreateManyInput | Prisma.InvitationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvitationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvitationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationUpdateInput, Prisma.InvitationUncheckedUpdateInput>;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyInput>;
    where?: Prisma.InvitationWhereInput;
    limit?: number;
};
export type InvitationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyInput>;
    where?: Prisma.InvitationWhereInput;
    limit?: number;
    include?: Prisma.InvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvitationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateInput, Prisma.InvitationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvitationUpdateInput, Prisma.InvitationUncheckedUpdateInput>;
};
export type InvitationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
    limit?: number;
};
export type InvitationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
};
