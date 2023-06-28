<script setup>
import { useOps } from '@/composables/ops';
import { useLogin } from '@/composables/log'
import { ref } from 'vue';
const {usuario} = useLogin()

const {balance, balancevalor} = useOps()
balance()
</script>

<template>
    <div class="card" style="display: flex; flex-direction: row;" >
        <div class="card-body" style="gap: 10px; display: flex; align-items: baseline;">
             <h1> ${{balancevalor?.balance?.currentBalance || ''}}</h1> 
             <span style="color: green;"> ${{balancevalor?.balance?.totalIncomes || '' }}</span>
             <span style="color: red;">  ${{balancevalor?.balance?.totalExpenses || ''}}</span>
        </div>
        <h1 v-show="usuario" style="padding: 1rem;"> {{ usuario }} </h1>

    </div>
</template>
