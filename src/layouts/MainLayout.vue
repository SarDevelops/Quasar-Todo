<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ $route.name }}
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>

      <q-list>
        <q-item to="/" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item to="/completedTasks" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="done_outline" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Completed Tasks</q-item-section>
        </q-item>
        <q-item to="/in-completedTasks" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="incomplete_circle" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">In Completed Tasks</q-item-section>
        </q-item>
        <q-item to="/deletedTasks" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="delete" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Deleted Tasks</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Add task',
    caption: 'task list',
    icon: 'add_circle',
    link: 'http://localhost:8080/#/'
  },
  {
    title: 'Completed Tasks',
    caption: 'Completed task list',
    icon: 'done_outline',
    link: 'http://localhost:8080/#/completedTasks'
  },
  {
    title: 'InComplete Tasks',
    caption: 'Inprogress task list',
    icon: 'incomplete_circle',
    link: 'http://localhost:8080/#/in-completedTasks'
  },
  {
    title: 'Delete Tasks',
    caption: 'Delete Task List',
    icon: 'delete',
    link: 'http://localhost:8080/#/deletedTasks'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
