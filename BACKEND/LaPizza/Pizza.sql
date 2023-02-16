select * from Itens_Pedido;
describe Itens_Pedido;
drop procedure if exists armazem;

delimiter //
create procedure armazem()
begin
    declare erro_sql tinyint default false;
    declare continue handler for sqlexception set erro_sql = true;
    start transaction;
    insert into Itens_Pedido (pedido_id, pizza_id, quantidade, valor) values (27, 10,3, (select valor from Pizzas where pizza_id = 10));
    insert into Itens_Pedido (pedido_id, pizza_id, quantidade, valor) values (28, 22,1,(select valor from Pizzas where pizza_id = 22));
    insert into Itens_Pedido (pedido_id, pizza_id, quantidade, valor) values (29, 8,7,(select valor from Pizzas where pizza_id = 8));
    if erro_sql = false then
        commit;
        select 'Transação feita com sucesso' as Resultado;
    else
        rollback;
        select 'Erro' as Resultado;
    end if;

end//
delimiter ;

call armazem();