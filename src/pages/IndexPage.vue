<template>
  <q-page class="flex flex-center">
    <!-- <q-img src="../assets/images/avng.jpg" spinner-color="white" img-class="my-custom-image" class="rounded-borders"> -->
    <q-card class="my-card " style=" width: 1300px; ">

      <q-card-section>
        <div class="text-h4">
          Todo List
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center">
          <div class="col-12 q-pa-md">
            <q-input v-model="textTodo" label="Write something">
              <template v-slot:after>
                <q-btn round dense flat icon="send" @click="addItem" />
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section v-if="todoList.length > 0">
        <div class="row " v-for="(item, index) in todoList" :key="index">
          <div class="col-8 text-subtitle1 q-py-sm">
            {{ item.value }}
          </div>
          <div class="col-auto q-py-md">
            <q-btn round dense flat icon="done" @click="removeTask(index)" />
          </div>
        </div>
      </q-card-section>
      <q-card-section v-else>
        <div class="justify-center">
          <div class="col-12">
            <div class="text-h6">
              No item in the list
            </div>
          </div>
        </div>
      </q-card-section>

    </q-card>
    <!-- </q-img> -->
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      todoList: [
        // { value: "create an app" },
        // { value: "test start" },
        // { value: "Learn something new" },
        // { value: "Let's do it" },

      ]
    }
  },
  methods: {
    addItem() {
      this.todoList.push({ value: this.textTodo })
      this.textTodo = ''
    },
    removeTask(index) {
      this.todoList.splice(index, 1)
    }

  },
  mounted() {
    db.collection("todos-quasar").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log(change.doc.data())
        }
        if (change.type === "modified") {
          console.log(change.doc.data())
        }
        if (change.type === "removed") {
          console.log(change.doc.data())
        }
      })
    })
  }
})
</script>
