import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../../lib/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/components/ui/dialog";
import { Input } from "../../lib/components/ui/input";
import { Label } from "../../lib/components/ui/label";
import { signIn } from "../../actions/login";

const loginSchema = zod.object({
  email: zod.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: zod.string().nonempty("Senha é obrigatório"),
});

export type LoginForm = zod.infer<typeof loginSchema>;

export const Login = () => {

  const {
    handleSubmit,
    register,
    watch,
    setError,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const form = watch();

  const onConfirm = async () => {
    const { status, data } = await signIn(form);

    if (status === "ok") {
      alert("logou")
      return;
    }
    setError("password", { message: data as string });
    setError("email", { message: data as string });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-white rounded-full">Entrar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-800">
        <DialogHeader>
          <h1 className="text-xl text-white font-bold">Login</h1>
        </DialogHeader>
        <div className="flex flex-col gap-4  text-gray-300">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input id="name" className="col-span-3 bg-gray-600" {...register("email")} />
          </div>
          {errors.email && (
            <span className="text-red-400 text-xs text-right">
              {errors.email.message}
            </span>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Senha
            </Label>
            <Input
              id="senha"
              type="password"
              className="col-span-3 bg-gray-600"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <span className="text-red-400 text-xs text-right">
              {errors.password.message}
            </span>
          )}

          <Button onClick={handleSubmit(onConfirm)}>Entre</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
