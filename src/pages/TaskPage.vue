<template>
  <main style="min-height: 50vh; margin-top: 2rem;">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->
          <div class="relative">
            <input type="text" class="form-control form-control-lg padding-right-lg"
                   placeholder="+ Add new task. Press enter to save." />
          </div>
          <!-- List of tasks -->
          <div class="card mt-2">
            <ul class="list-group list-group-flush">
              <Task v-for="task in tasks" :key="task.id" :task="task" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import {onMounted, ref} from "vue";
  import {allTasks} from "@/http/task-api.js";
  import Task from "@/components/tasks/task.vue";

  const tasks = ref([])

  onMounted(async () => {
   const { data } = await allTasks()
    tasks.value = data.data
  })
</script>