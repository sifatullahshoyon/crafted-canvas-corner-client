import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Button variant="destructive">Destructive</Button>
      <p className="font-roboto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi
        nostrum vero et quisquam expedita quia cum sequi quo eos fuga reiciendis
        id dolorem quaerat necessitatibus quod ipsum debitis officia nesciunt
        quae in dolore architecto, quis ab? Quos autem inventore magni possimus
        ducimus beatae nemo, soluta numquam natus eaque. Porro autem dolore
        labore repudiandae repellendus eos ad voluptatem cupiditate deleniti.
        Impedit cum repudiandae quas ullam dignissimos veritatis, explicabo
        minima esse, doloremque in mollitia blanditiis debitis ad. Reprehenderit
        aspernatur rerum accusamus distinctio incidunt tempora tempore et, iure
        commodi quod debitis sed hic, rem ratione iusto sunt dolorem veniam
        nobis saepe architecto.
      </p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default App;
