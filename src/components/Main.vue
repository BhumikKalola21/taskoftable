<template>
  <section>
    <div>Daily log</div>
    <div>
      <select @change="colorChangin($event)">
        <option value="null" selected disabled>color</option>
        <option v-for="color in colors" :key="color">{{ color }}</option>
      </select>
      <div ref="table">
        <table>
          <tr>
            <td>Date</td>
            <td>Day</td>
            <td>Section</td>
            <td>GitRepo</td>
            <td>Progress</td>
            <td :colspan="5">Topics</td>
          </tr>
          <tr v-for="data in user" :key="data.id">
            <td>{{ data.date }}</td>
            <td>{{ data.day }}</td>
            <td>{{ data.section }}</td>
            <td>{{ data.gitrepo }}</td>
            <td>
              <div class="progress">
                <div>{{ data.progress }}</div>
                <div :style="{ width: data.progress }"></div>
              </div>
            </td>
            <td v-for="topic in data.topics" :key="topic.id">
              {{ topic }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      colors: ["green", "red", "yellow", "grey"],
      user: [
        {
          date: "1/03/2022",
          day: "Tuesday",
          section: "1",
          gitrepo: "https://github.com/",

          topics: ["overview", "directives", "lifecycle"],
        },
        {
          date: "1/4/2022",
          day: "Wednesday",
          section: "2",
          gitrepo: "https://github.com/",

          topics: ["methods", "computed", "watch", "events", "props"],
        },
      ],
    };
  },
  methods: {
    colorChangin(event) {
      this.$refs.table.style.backgroundColor =
        event.target.options[event.target.options.selectedIndex].innerHTML;
    },
  },
};
</script>
